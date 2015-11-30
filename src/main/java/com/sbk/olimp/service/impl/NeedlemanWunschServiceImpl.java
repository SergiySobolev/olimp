package com.sbk.olimp.service.impl;

import com.sbk.olimp.dto.DropDownDTO;
import com.sbk.olimp.repo.DictRepository;
import com.sbk.olimp.service.NeedlemanWunschService;
import com.sbk.stringdistance.LevenshteinDistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rx.Observable;

import java.util.List;

@Service
public class NeedlemanWunschServiceImpl implements NeedlemanWunschService {

    @Autowired
    private DictRepository dictRepository;

    public boolean isDistanceBetweenWordsLessThat(String baseWord, String word, long distance) {
        return LevenshteinDistance.findDistance(baseWord, word) <= distance;
    }

    @Override
    public List<DropDownDTO> getNearbyItems(String baseWord) {
        long maxItemNameLen = dictRepository.getItemNameMaxLen();
        return  Observable.from(dictRepository.findAll())
                .filter(dictEntity ->
                        isDistanceBetweenWordsLessThat(baseWord, dictEntity.getItem(),
                        maxItemNameLen - baseWord.length()))
                .map(dictEntity -> new DropDownDTO(dictEntity.getCode(), dictEntity.getItem()))
                .toSortedList((d1, d2) -> d1.getName().compareTo(d2.getName()))
                .toBlocking()
                .first()
                ;
    }

}
