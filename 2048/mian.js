// 游戏主逻辑文件

/**
 * 定义JavaScript数组
 */
let board = new Array()
// 初始化游戏棋盘
$(function () {
    newgame()
})

function newgame() {
    // 初始化棋盘格
    init()

}

function init() {
    for (let i = 0; i < 4; i++) {
        // 定义了一个二维数组
        board[i] = new Array();
        for (let j = 0; j < 4; j++) {
            // 初始化格子的值为0
            board[i][j] = 0;
            // 通过双重遍历获取每个格子元素
            let gridCell = $('#grid-cell-' + i + '-' + j);
            // 通过getPosTop()方法设置每个格子距顶端的距离
            gridCell.css('top',getPosTop(i,j));
            // 通过getPosLeft()方法设置每个格子距离左端的距离
            gridCell.css('left',getPosLeft(i,j));
        }
    }
}