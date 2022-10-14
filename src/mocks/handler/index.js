import * as studyHandlers from './study';

export const handlers = [...Object.values(studyHandlers)]; //studyHandler 넣었을 때
//export const handlers = []; //handler 뺏을 때
