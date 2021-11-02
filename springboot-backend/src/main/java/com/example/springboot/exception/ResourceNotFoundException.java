package com.example.springboot.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//API will return the NOT FOUND status
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    //pass the error message to super class
    public ResourceNotFoundException(String message){
        super(message);
    }
}
