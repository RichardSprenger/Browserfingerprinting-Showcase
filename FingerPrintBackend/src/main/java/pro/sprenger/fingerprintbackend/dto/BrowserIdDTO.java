package pro.sprenger.fingerprintbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pro.sprenger.fingerprintbackend.database.entity.BrowserId;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BrowserIdDTO {

    private long id;

    private String browserId;

    public BrowserIdDTO(BrowserId browserId) {
        this.id = browserId.getId();
        this.browserId = browserId.getBrowserId();
    }
}
