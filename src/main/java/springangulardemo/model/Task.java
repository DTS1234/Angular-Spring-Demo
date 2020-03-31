package springangulardemo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
public class Task {

    public Task() {}

    private String name;
    @Id
    private Long id;
    private Boolean completed;

    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate dueDate;


}
