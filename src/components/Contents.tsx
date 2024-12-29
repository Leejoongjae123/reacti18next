import InnerManual from './InnerManual';

function Contents() {
  return (
    <div className=' bg-white w-full flex flex-col'> 
      <div className="bg-[#F2F2F2] w-full py-14 px-12">
        <h1 className="text-[24px] font-bold mb-2 text-[#0A54CC]">접속 및 설치</h1>
        <p className="text-[#424242] text-sm">
          사용자가 UCWORKS 서비스에 접근하고 필요한 앱을 설치하는 과정에 대한 안내입니다. 서비스 접속은 웹 브라우저를 통해
        </p>
        <p className="text-[#424242] text-sm">
          웹 애플리케이션에 접근하거나, 데스크톱/모바일 애플리케이션을 통해 이루어질 수 있습니다
        </p>
      </div>
      <div className="bg-white w-full py-10 px-12">
        <h2 className="text-[20px] font-bold mb-2">메신저 접속</h2>
        <p className="text-[#424242] text-sm">관리자에 의해 생성된 워크스페이스(웹 메신저)에 접속하는 방법에 관해 설명합니다.</p>
      </div>
      <div className="bg-white w-full h-full py-10 px-12">
        <InnerManual />

      </div>
    </div>
  )
}

export default Contents