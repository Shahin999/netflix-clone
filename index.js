

const tabContentItems = document.querySelectorAll(".tab-content-item");
const tabItems= document.querySelectorAll('.tab-item');
function enableView(sl){

    tabContentItems.forEach((item)=> item.classList.remove('show'))
    tabItems.forEach((item)=> item.classList.remove('tab-border'));

    const selectedSection=document.getElementById(`tab-${sl}-content`);
    const selectedTab = document.getElementById(`tab${sl}`)

    selectedSection?.classList.add('show')
    selectedTab?.classList.add('tab-border')

}