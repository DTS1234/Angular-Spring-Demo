package springangulardemo.service;

import springangulardemo.model.Task;

public interface TaskService {

    Iterable<Task> list();
    Task save(Task task);

}
