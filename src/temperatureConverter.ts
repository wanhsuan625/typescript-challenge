/**
 * 將攝氏溫度轉換為華氏溫度
 * @param celsius - 攝氏溫度
 * @returns 華氏溫度
 */
export function celsiusToFahrenheit(celsius: number): number {
    // 攝氏轉華氏
    return celsius * 9 / 5 + 32;
}