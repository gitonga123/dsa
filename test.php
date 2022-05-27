<?php
function twoSum($nums, $target) {
        $array=[];
        
        for($i = 0; $i < count($nums); $i++) {
            if (array_key_exists($nums[$i], $array)) {
                return [$array[$nums[$i]], $i];
            }
            $array[
                $target - $nums[$i]
            ] = $i;
        }
        
        return [];
    }

var_dump(twoSum([2, 7, 11, 15], 9));