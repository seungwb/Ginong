package kr.co.ginong.web.entity.inquiry;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FaqCategory {
    private long    id;
    private String  name;
    private long    adminId;
}
