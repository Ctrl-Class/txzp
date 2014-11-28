package ctrl.cs.txzp.dao;

import ctrl.cs.txzp.modal.Function;

public interface FunctionMapper {
    int deleteByPrimaryKey(Integer funcId);

    int insert(Function record);

    int insertSelective(Function record);

    Function selectByPrimaryKey(Integer funcId);

    int updateByPrimaryKeySelective(Function record);

    int updateByPrimaryKeyWithBLOBs(Function record);

    int updateByPrimaryKey(Function record);
}