package com.ganeshtakale.ipldemo.repository;

import com.ganeshtakale.ipldemo.model.TeamStrategy;
import com.ganeshtakale.ipldemo.model.Teams;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamStrategyRepository extends CrudRepository<TeamStrategy, Long>{

}
