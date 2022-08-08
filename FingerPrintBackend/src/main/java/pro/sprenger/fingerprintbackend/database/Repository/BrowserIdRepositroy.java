package pro.sprenger.fingerprintbackend.database.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sprenger.fingerprintbackend.database.entity.BrowserId;

import java.util.Optional;

public interface BrowserIdRepositroy extends JpaRepository<BrowserId, Long> {

    Optional<BrowserId> findBrowserIdByBroswerId(String id);
}
