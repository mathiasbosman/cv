package be.mathiasbosman.blog.dto;

import org.springframework.util.StringUtils;

public class PostContentDto {
  private final String subject;
  private final String body;

  public PostContentDto(String subject, String body) {
    this.subject = StringUtils.trimWhitespace(subject);
    this.body = body;
  }

  public String getSubject() {
    return subject;
  }

  public String getBody() {
    return body;
  }
}
