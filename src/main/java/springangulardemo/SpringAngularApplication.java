package springangulardemo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springangulardemo.model.Task;
import springangulardemo.service.TaskService;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class SpringAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAngularApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(TaskService taskService) {
		return args -> {
			taskService.save(new Task("Learn Java", 1L, true, LocalDate.now()));
			taskService.save(new Task("Learn Spring framework", 2L, false, LocalDate.now().plus(3, ChronoUnit.DAYS)));
			taskService.save(new Task("Learn Angular 2+", 3L, false, LocalDate.now().plus(5, ChronoUnit.DAYS)));
			taskService.save(new Task("Learn Machine Learning", 4L, false, LocalDate.now().plus(8, ChronoUnit.DAYS)));
			taskService.save(new Task("Learn SQL, mongoDb, Pl/SQL", 5L, false, LocalDate.now().plus(11, ChronoUnit.DAYS)));
			taskService.save(new Task("Learn Agile development", 6L, false, LocalDate.now().plus(16, ChronoUnit.DAYS)));
			taskService.save(new Task("Learn Design Patterns", 7L, false, LocalDate.now().plus(22, ChronoUnit.DAYS)));
		};
	}


}
