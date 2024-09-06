/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({ providerRes, parserRes } = {}) {
    // 返回时间配置JSON，所有项都为可选项，如果不进行时间配置，请返回空对象
    return {
        totalWeek: 20, // 总周数：[1, 30]之间的整数
        startSemester: "", // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: true, // 是否显示周末
        forenoon: 6, // 上午课程节数：[1, 10]之间的整数
        afternoon: 5, // 下午课程节数：[0, 10]之间的整数
        night: 2, // 晚间课程节数：[0, 10]之间的整数
        sections: [
            {
                section: 1,
                startTime: "08:00",
                endTime: "08:45",
            },
            {
                section: 2,
                startTime: "08:55",
                endTime: "09:40",
            },
            {
                section: 3,
                startTime: "10:00",
                endTime: "10:45",
            },
            {
                section: 4,
                startTime: "10:55",
                endTime: "11:40",
            },
            {
                section: 5,
                startTime: "11:50",
                endTime: "12:35",
            },
            {
                section: 6,
                startTime: "12:45",
                endTime: "13:30",
            },
            {
                section: 7,
                startTime: "14:00",
                endTime: "14:45",
            },
            {
                section: 8,
                startTime: "14:55",
                endTime: "15:40",
            },
            {
                section: 9,
                startTime: "16:00",
                endTime: "16:45",
            },
            {
                section: 10,
                startTime: "16:55",
                endTime: "17:40",
            },
            {
                section: 11,
                startTime: "17:50",
                endTime: "18:35",
            },
            {
                section: 12,
                startTime: "19:20",
                endTime: "20:05",
            },
            {
                section: 13,
                startTime: "20:15",
                endTime: "21:00",
            },
        ], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    };
}
