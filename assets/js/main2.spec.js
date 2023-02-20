describe("Тестируем функцию ageClassification", () => {
  it("должен возвращать null для n, меньшего или равного 0", () => {
    expect(ageClassification(-1)).toBeNull();
    expect(ageClassification(0)).toBeNull();
  });

  it("должен возвращать «детский возраст» для n от 1 до 24 включительно", () => {
    expect(ageClassification(1)).toBe('детский возраст');
    expect(ageClassification(24)).toBe('детский возраст');
    expect(ageClassification(24.01)).not.toBe('детский возраст');
  });

  it("должен возвращать «молодой возраст» для n между 24.01 и 44 включительно", () => {
    expect(ageClassification(24.01)).toBe('молодой возраст');
    expect(ageClassification(44)).toBe('молодой возраст');
    expect(ageClassification(44.01)).not.toBe('молодой возраст');
  });

  it("должен возвращать 'средний возраст' для n между 44.01 и 65 включительно", () => {
    expect(ageClassification(44.01)).toBe('средний возраст');
    expect(ageClassification(65)).toBe('средний возраст');
    expect(ageClassification(65.01)).not.toBe('средний возраст');
  });

  it("должен возвращать 'пожилой возраст' для n между 65.01 и 75 включительно", () => {
    expect(ageClassification(65.01)).toBe('пожилой возраст');
    expect(ageClassification(75)).toBe('пожилой возраст');
    expect(ageClassification(75.01)).not.toBe('пожилой возраст');
  });

  it("должен возвращать «старческий возраст» для n от 75,01 до 90 включительно", () => {
    expect(ageClassification(75.01)).toBe('старческий возраст');
    expect(ageClassification(90)).toBe('старческий возраст');
    expect(ageClassification(90.01)).not.toBe('старческий возраст');
  });

  it("должен возвращать «долгожители» для n между 90,01 и 122 включительно", () => {
    expect(ageClassification(90.01)).toBe('долгожители');
    expect(ageClassification(122)).toBe('долгожители');
    expect(ageClassification(122.01)).toBeNull();
  });

  it("должен возвращать null для n больше 122", () => {
    expect(ageClassification(150)).toBeNull();
  });
});