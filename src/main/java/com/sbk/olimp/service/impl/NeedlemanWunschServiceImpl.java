package com.sbk.olimp.service.impl;

import com.sbk.olimp.domain.DictEntity;
import com.sbk.olimp.dto.DropDownDTO;
import com.sbk.olimp.repo.DictRepository;
import com.sbk.olimp.service.NeedlemanWunschService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.Observable;
import rx.functions.Func1;

import java.util.ArrayList;
import java.util.List;

@Service
public class NeedlemanWunschServiceImpl implements NeedlemanWunschService {

    @Autowired
    private DictRepository dictRepository;

    public boolean isDistanceBetweenWordsLessThat(String baseWord, String word, long distance) {
        return word.charAt(0) == 'a';
    }

    @Override
    public List<DropDownDTO> getNearbyItems(String baseWord) {
        return  Observable.from(dictRepository.findAll())
                .filter(dictEntity -> isDistanceBetweenWordsLessThat(baseWord, dictEntity.getItem(), 2))
                .map(dictEntity -> new DropDownDTO(dictEntity.getCode(), dictEntity.getItem()))
                .toList()
                .toBlocking()
                .first();
    }
}
