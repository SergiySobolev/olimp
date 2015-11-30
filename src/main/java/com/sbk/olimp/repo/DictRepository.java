package com.sbk.olimp.repo;

import com.sbk.olimp.domain.DictEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public interface DictRepository extends JpaRepository<DictEntity, Long> {
    @Query("select max(length(e.item)) from DictEntity e")
    long getItemNameMaxLen();
}
