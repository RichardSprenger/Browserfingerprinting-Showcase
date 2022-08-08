package pro.sprenger.fingerprintbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pro.sprenger.fingerprintbackend.database.Repository.HistoryRepository;
import pro.sprenger.fingerprintbackend.database.Repository.BrowserIdRepositroy;
import pro.sprenger.fingerprintbackend.database.entity.History;
import pro.sprenger.fingerprintbackend.database.entity.BrowserId;
import pro.sprenger.fingerprintbackend.dto.BrowserIdDTO;
import pro.sprenger.fingerprintbackend.dto.HistoryDTO;
import pro.sprenger.fingerprintbackend.service.FingerprintService;

import java.util.List;
import java.util.Optional;

import static java.util.Objects.isNull;

@Service("fingerprintService")
public class FingerprintServiceImpl implements FingerprintService {

    @Autowired
    HistoryRepository historyRepository;

    @Autowired
    BrowserIdRepositroy browserIdRepositroy;

    @Override
    public Optional<List<History>> getHistoryForID(String id) {
        return getHistoryForBrowserId(getBrowserIdByString(id));
    }

    @Override
    public List<History> updateHistoryForID(HistoryDTO historyDTO) {
        BrowserId browserId = getBrowserIdByString(historyDTO.getBrowserId());
        History history = new History();
        history.setUrl(historyDTO.getUrl());
        history.setBrowserId(browserId);
        historyRepository.save(history);
        return getHistoryForBrowserId(browserId).get();
    }

    @Override
    public String getAd(String id) {
        BrowserId browserId = getBrowserIdByString(id);
        Optional<List<History>> histories = getHistoryForBrowserId(browserId);
        if (!histories.isPresent()) return "http://localhost:4200/shop/1";
        return histories.get().stream().filter(history -> history.getUrl().contains("/shop/")).findFirst().get().getUrl();
    }

    public Optional<List<History>> getHistoryForBrowserId(BrowserId browserId) {
        return historyRepository.findHistoriesByBrowserId(browserId);
    }

    public List<BrowserId> getAllIDReference() {
        return browserIdRepositroy.findAll();
    }

    @Override
    public BrowserId getBrowserIdByString(String id) {
        BrowserId ref = browserIdRepositroy.findBrowserIdByBroswerId(id).orElse(new BrowserId());
        if (isNull(ref.getId())) {
            ref.setBrowserId(id);
            ref = browserIdRepositroy.save(ref);
        }

        return ref;
    }




}
