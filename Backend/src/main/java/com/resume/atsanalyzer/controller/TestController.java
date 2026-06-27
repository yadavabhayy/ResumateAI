package com.resume.atsanalyzer.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resume.atsanalyzer.dto.AnalyzeRequest;
import com.resume.atsanalyzer.service.AnalyzeService;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class TestController {
    private final AnalyzeService analyzeService;

public TestController(AnalyzeService analyzeService) {
    this.analyzeService = analyzeService;
}

    @GetMapping("/api/test")
    public String test() {
        return "Backend Working Successfully!";
    }

   @PostMapping("/api/analyze")
public String analyze(@RequestBody AnalyzeRequest request) {
    return analyzeService.analyzeResume(request);
}
}
