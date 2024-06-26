package kr.co.ginong.web.entity.mypage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReviewImg {
    private long    id;
    private String  name;
    private String  imgPath;
    private long    reviewId;
    
}
