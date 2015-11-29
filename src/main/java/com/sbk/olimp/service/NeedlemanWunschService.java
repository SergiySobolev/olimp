package com.sbk.olimp.service;

import com.sbk.olimp.dto.DropDownDTO;

import java.util.List;

public interface NeedlemanWunschService {
    boolean isDistanceBetweenWordsLessThat(String baseWord, String word, long distance);
    List<DropDownDTO> getNearbyItems(String baseWord);
}
