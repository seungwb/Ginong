package kr.co.ginong.web.service.user;

import kr.co.ginong.web.entity.point.PointHistoryView;

import java.util.List;

public interface PointService {


    List<PointHistoryView> getList(Long memberId);

    int getAvailPont(Long memberId);



}
