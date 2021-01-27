package be.mathiasbosman.cv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"be.mathiasbosman.cv.repo"})
public class RepositoryTestApplication {

  public static void main(String[] args) {
    SpringApplication.run(RepositoryTestApplication.class, args);
  }
}
