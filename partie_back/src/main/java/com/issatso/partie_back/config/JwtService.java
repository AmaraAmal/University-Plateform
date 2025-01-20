package com.issatso.partie_back.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    private static final String SECRET_KEY = "W5KgRicbVkxYQ9mGWnbkH9vWgXnm//ZfhcwDTsrL34gWMNWOp8YzO7KXykhAS2eLzbsBO9E1PKXm3XpK5fPAARO5aIZgYLU005d6t84gGXU3SmeSct52/IUZub1CabOZClsLxjOHowsX6Oyu5aTONIbpRFVjvanHgMWWtJ+gxFNrNoi0pb3q2OkGiFJZILn6dGcG64wYcnxihDJZLpe/tx01Unu06QKLabHzwBW5+RRwh4SXEb3kdjEFqJVyXOwLS+XQhw/j6EhoiXQ4w5d4fajg8xDhujNXx3vqpnoTRSjX7SGx91mJpq5gW4ITT27JIgj/LIUZcAHKlbYVvPMTDb/F6C99ajRVgJhJJ3R6c7g=\n";
    public String extractUsername(String token) {
        return extractClaim(token,Claims::getSubject);
    }


    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    //cette methode est utilisee pour genere le token a partir de UserDetails
    // sans l utilisation d extraClaims
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String generateToken(
            Map<String, Object> extractClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extractClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256 )
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Claims extractAllClaims(String token) {
        //Jwts est une classe fournie par la
        // bibliothèque Java "jjwt"qui
        // facilite la manipulation et la validation des JWT.
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    //cette methode est utilisée pour obtenir la clé de signature à partir de la clé secrète
    private Key getSignInKey() {
        //Cette ligne décode la clé secrète Base64 en un tableau de bytes.
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        //Cette ligne utilise la clé de bytes décodée pour créer une clé de signature HMAC
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
