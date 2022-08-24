package pro.sprenger.fingerprintbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.sprenger.fingerprintbackend.dto.BrowserIdDTO;
import pro.sprenger.fingerprintbackend.dto.HistoryDTO;
import pro.sprenger.fingerprintbackend.service.FingerprintService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class MainController {

    @Autowired
    FingerprintService fingerprintService;

    @RequestMapping(value = "/id", method = RequestMethod.GET)
    public ResponseEntity<List<BrowserIdDTO>> getAllId() {
        return ResponseEntity.ok().body(fingerprintService.getAllIds().stream().map(BrowserIdDTO::new).collect(Collectors.toList()));
    }

    // check if browser id is existend -> if not create id
    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public ResponseEntity<BrowserIdDTO> checkId(@PathVariable String id) {
        return ResponseEntity.ok().body(new BrowserIdDTO(fingerprintService.getBrowserIdByString(id)));
    }

    @RequestMapping(value = "/history/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<HistoryDTO>> getHistroyForId(@PathVariable String id) {
        return ResponseEntity.ok().body(fingerprintService.getHistoryForID(id).stream().map(HistoryDTO::new).collect(Collectors.toList()));
    }

    // update history
    @RequestMapping(value = "/history", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<HistoryDTO>> updateHistoryForId(@RequestBody HistoryDTO historyDTO) {
        return ResponseEntity.ok().body(fingerprintService.updateHistoryForID(historyDTO).stream().map(HistoryDTO::new).collect(Collectors.toList()));
    }

    // get ad for id
    @RequestMapping(value = "/ad/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getAdForID(@PathVariable String id) {
        return ResponseEntity.ok().body(fingerprintService.getAd(id));
    }

    // reference user to id
}
