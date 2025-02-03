let calculate = () => {
  const fuelPrice = Number(document.getElementById("fuel-price").value);
  const kilometers = Number(document.getElementById("kilometers").value);
  const fuelEfficiency = Number(
    document.getElementById("fuel-efficiency").value
  );

  // التحقق من صحة المدخلات
  if (fuelPrice <= 0 || kilometers <= 0 || fuelEfficiency <= 0) {
    alert(
      "يرجى إدخال أرقام موجبة فقط في جميع الحقول، بما في ذلك استهلاك الوقود."
    );
    return;
  }

  const litersUsed = (fuelEfficiency / 100) * kilometers; // حساب الوقود المستخدم
  const totalCost = fuelPrice * litersUsed; // حساب تكلفة الرحلة

  // تحديث نص الفقرة بالنتيجة
  const result = document.getElementById("result");
  result.innerHTML = `
      <strong>نتيجة الحساب:</strong><br>
      <strong>سعر اللتر:</strong> ريال سعودي ${fuelPrice.toFixed(2)}<br>
      <strong>المسافة المقطوعة:</strong> ${kilometers.toFixed(2)} كيلومتر<br>
      <strong>الوقود المستخدم في الرحلة:</strong> ${litersUsed.toFixed(
        2
      )} لتر<br>
      <strong>تكلفة الرحلة الإجمالية هي:</strong> <span style="color: #1576d6;">ريال سعودي ${totalCost.toFixed(
        2
      )}</span>
  `;
};
