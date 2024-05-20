package kr.co.ginong.web.repository.order;

import kr.co.ginong.web.entity.member.MemberOrderView;
import kr.co.ginong.web.entity.order.Order;
import kr.co.ginong.web.entity.order.OrderView;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface OrderRepository {
    List<OrderView> findAll(Long memberId,String query, Boolean sort);
    List<OrderView> findCancel(Long memberId,String query);
    List<OrderView> findRefund(Long memberId, String query, Boolean sort);
    List<OrderView> findExchange(Long memberId, String query, Integer sort);
    boolean save(Order order);
    boolean update(Order order);
    void delete(long id);

    Integer countByMemberId(Long memberId);

    Order findRecentByMemberId(Long memberId);

    List<OrderView> findItems(Long orderId);

    List<MemberOrderView> findByMemberId(Long memberId);

}
