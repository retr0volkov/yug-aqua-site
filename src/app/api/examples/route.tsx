export function GET(){
    let res = [
        {
            "id": 1,
            "name": "Это название работы 1",
            "shortdesc": "Краткое описание",
            "description": "Описание проделанной на объекте работы",
            "highlights": [
                "Список основных моментов по поводу работы",
                "Пример 1",
                "Пример 2",
                "Пример 3"
            ],
            "details": "Краткое замечание или отметка в конце страницы"
        },
        {
            "id": 2,
            "name": "Это название работы 2",
            "shortdesc": "Краткое описание",
            "description": "Описание проделанной на объекте работы",
            "highlights": [
                "Список основных моментов по поводу работы",
                "Пример 1",
                "Пример 2",
                "Пример 3"
            ],
            "details": "Краткое замечание или отметка в конце страницы"
        },
        {
            "id": 3,
            "name": "Это название работы 3",
            "shortdesc": "Краткое описание",
            "description": "Описание проделанной на объекте работы",
            "highlights": [
                "Список основных моментов по поводу работы",
                "Пример 1",
                "Пример 2",
                "Пример 3"
            ],
            "details": "Краткое замечание или отметка в конце страницы"
        }
    ]
    return Response.json(res)
}