package ctrl.cs.txzp.dao;

import ctrl.cs.txzp.modal.Authority;

public interface AuthorityMapper {
    int deleteByPrimaryKey(Integer authId);

    int insert(Authority record);

    int insertSelective(Authority record);

    Authority selectByPrimaryKey(Integer authId);

    int updateByPrimaryKeySelective(Authority record);

    int updateByPrimaryKey(Authority record);
}