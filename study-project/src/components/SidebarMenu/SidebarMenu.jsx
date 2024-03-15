import './sidebarMenu.css'

function SidebarMenu(){
    const sidebarNavs = [
        { id: 1, name: 'Item1' },
        { id: 2, name: 'Item2' },
        { id: 3, name: 'Item3' },
        { id: 4, name: 'Item4' },
        { id: 5, name: 'Item5' },
        { id: 6, name: 'Item6' },
        { id: 7, name: 'Item7' },
        { id: 8, name: 'Item8' },
        { id: 9, name: 'Item9' },
        { id: 10, name: 'Item10' },
        { id: 11, name: 'Item11' },
        { id: 12, name: 'Item12' },
        { id: 13, name: 'Item13' },
        { id: 14, name: 'Item14' },
        { id: 15, name: 'Item15' },
        { id: 16, name: 'Item16' }
    ]
    return(
        <div id='frameSidebar'>
            <div className='sidebarMenu'>
                <div className='myAccount'>
                    Tài khoản
                </div>
                <div className='listNav'>
                {sidebarNavs.map(sidebarNav =>(
                    <ul key={sidebarNav.id}>
                        <li>{sidebarNav.name}</li>
                    </ul>
                ))}
                </div>
                {/* <div className='conttenOther'>
                    <ul>
                        <li>Nội dung thêm</li>
                        <li>Nội dung thêm</li>
                        <li>Nội dung thêm</li>
                        <li>Nội dung thêm</li>
                        <li>Nội dung thêm</li>
                        <li>Nội dung thêm</li>
                    </ul>
                </div> */}
                <div className='listBottom'>
                    <ul>
                        <li>Cài đặt</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SidebarMenu;