package pro.sprenger.fingerprintbackend.service;

import pro.sprenger.fingerprintbackend.database.entity.History;
import pro.sprenger.fingerprintbackend.database.entity.BrowserId;
import pro.sprenger.fingerprintbackend.dto.BrowserIdDTO;
import pro.sprenger.fingerprintbackend.dto.HistoryDTO;

import java.util.List;
import java.util.Optional;

public interface FingerprintService {

    List<BrowserId> getAllIds();

    BrowserId getBrowserIdByString(String id);

    Optional<List<History>> getHistoryForID(String id);

    List<History> updateHistoryForID(HistoryDTO historyDTO);

    String getAd(String id);
}
