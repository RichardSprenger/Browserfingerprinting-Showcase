package pro.sprenger.fingerprintbackend.database.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sprenger.fingerprintbackend.database.entity.History;
import pro.sprenger.fingerprintbackend.database.entity.BrowserId;

import java.util.List;
import java.util.Optional;

public interface HistoryRepository extends JpaRepository<History, Long> {
    List<History> findHistoriesByBrowserId(BrowserId idReference);
}
