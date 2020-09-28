package com.ganeshtakale.ipldemo.repository;

import com.ganeshtakale.ipldemo.model.Teams;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamsRepository extends CrudRepository<Teams,Integer>{

}
