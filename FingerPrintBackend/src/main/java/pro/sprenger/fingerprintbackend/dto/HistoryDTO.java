package pro.sprenger.fingerprintbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pro.sprenger.fingerprintbackend.database.entity.History;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HistoryDTO {

    private Long id;

    private String browserId;

    private String url;

    public HistoryDTO(History history) {
        this.id = history.getId();
        this.url = history.getUrl();
        this.browserId = history.getBrowserId().getBrowserId();
    }
}
