package springangulardemo.repository;

import org.springframework.data.repository.CrudRepository;
import springangulardemo.model.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {



}
