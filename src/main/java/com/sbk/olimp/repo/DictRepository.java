package com.sbk.olimp.repo;

import com.sbk.olimp.domain.DictEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DictRepository extends JpaRepository<DictEntity, Long>{
}
