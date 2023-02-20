describe("Тестуємо функцію defUpperStr", function() {
  it(" функція повинна повернути текст 'MY TEXT' ", () => {
    const t1 = 'My text';
    expect(defUpperStr(t1)).toBe(t1.toUpperCase());
  });

  it(" функція повинна повернути текст за замовчуванням  'DEFAULT TEXT' якщо тест не був переданий ", () => {
    const t1 = 'My text';
    expect(defUpperStr()).toBe('DEFAULT TEXT');
  });
  
});