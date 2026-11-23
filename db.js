/* shoes-shop · Supabase 연결 (프롬프트 2)
 * 공개용 Project URL과 Publishable key만 사용합니다.
 * 회원·상품·주문 기능 전환은 다음 단계에서 진행합니다.
 */
const db = window.supabase.createClient(
  'https://peyjqukphplfhbljajac.supabase.co',
  'sb_publishable_9irTYws76IWAPTlvwfNUpA_XS6KF0lV'
);

// 페이지 로드 시 상품 수로 연결 상태를 확인합니다.
(async function checkDatabaseConnection() {
  try {
    const { count, error } = await db
      .from('shop_products')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error(error);
      return;
    }
    console.log(`연결 성공: 상품 ${count}개`);
  } catch (error) {
    console.error(error);
  }
})();
