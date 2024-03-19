import React, { Children, cloneElement } from 'react';
import { getResults } from "@/utils";
import { Carousel } from "..";

export async function CarouselWrapper(){
    const { resources } = await getResults();

    return <Carousel resources={resources} />
}