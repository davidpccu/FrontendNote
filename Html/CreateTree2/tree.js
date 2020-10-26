// forked from : http://kennethjorgensen.com/blog/2014/canvas-trees
// from : http://www.open-open.com/lib/view/open1452337903308.html
// Author: wukai
// Time:2015-10-04

var Branch = function() {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.x = canvas.width / 2;
    this.y = canvas.height;
    this.radius = 10;
    this.angle = Math.PI / 2;

    this.fillStyle = "#000";
    this.shadowColor = "#000";
    this.shadowBlur = 2;

    this.speed = width/500;
    this.generation = 0;
    this.distance = 0;
};

Branch.prototype = {
    // 主要處理過程在這
    process: function() {
        // 在當前的座標處畫一個圖形
        this.draw();
        // 把當前的Branch繼續向上延伸一部份
        this.iterate();
        this.split();
        this.die();
    },

    draw: function() {
        var context = this.context;
        context.save();
        context.fillStyle = this.fillStyle;
        context.shadowColor = this.shadowColor;
        context.shadowBlur = this.shadowBlur;
        context.beginPath();
        context.moveTo(this.x, this.y);
        // 圖形是依靠在各個座標處畫出的圖形組合而成
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
        context.restore();
    },

    iterate: function() {
        var deltaX = this.speed * Math.cos(this.angle);
        var deltaY = - this.speed * Math.sin(this.angle);

        // 利用speed控制需要向上延伸的距離
        this.x += deltaX;
        this.y += deltaY;
        // 根據當前是第幾代 減小半徑直
        this.radius *= (0.99 - this.generation/250);

        // 求出距離的增量
         var deltaDistance = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2));

        // distance指的是當前的這一段樹枝的長度
        this.distance += deltaDistance;

        // 控制speed的大小，使繪圖時不至於在兩個圓之間出現空白
        if (this.speed > this.radius * 2){
            this.speed = this.radius * 2;
        }

        // 產生一個範圍在（-0.1, 0.1)之間的隨機數,對角度進行一個偏轉
        this.angle += Math.random()/5 - 1/5/2;
    },

    split: function() {
        var splitChance = 0;
        // 樹幹部分，長度大於畫面高度1/5時開始分岔
        if (this.generation == 1)
            splitChance = this.distance / height - 0.2;
        // 樹枝部分
        else if (this.generation < 3)
            splitChance = this.distance / height - 0.1;

        if (Math.random() < splitChance) {
            // 下一代生成n个樹枝
            var n = 2 + Math.round(Math.random()*3);
            for (var i = 0; i < n; i++) {
                var branch = new Branch();
                branch.x = this.x;
                branch.y = this.y;
                branch.angle = this.angle;
                branch.radius = this.radius * 0.9;
                branch.generation++;
                branch.fillStyle =this.fillStyle;

                // 將branch加入到集合中去
                branches.add(branch);
            }
            // 將父代branch刪去
            branches.remove(this);
        }
    },

    die: function() {
        if (this.radius < 0.5) {
            branches.remove(this);
        }
    }
};

var BranchCollection = function() {
    this.branches = [];
    this.canvas = canvas;
}

BranchCollection.prototype = {
    add: function(branch) {
        this.branches.push(branch);
    },

    // 依次處理集合内的每一个元素
    process: function() {
        for (var b in this.branches) {
            this.branches[b].process();
        }
    },

    remove: function(branch) {
        for (var  b in this.branches)
            if (this.branches[b] === branch)
                this.branches.splice(b, 1);
    } 
}

var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById("canvastree");
canvas.width = width;
canvas.height = height;

// 設置初始的數量
var n = 2 + Math.random() * 3;

// 設定初始的半徑大小
var initialRadius = width / 50;

// 新建一個集合用於放置所有的branch
branches = new BranchCollection();

for (var i = 0; i < n; i++) {
    branch = new Branch();
    // 以canvas的中點為基準，左右各佔一個initialRadius的寬度
    // 根據序號i算出初始x座標
    branch.x = width/2 - initialRadius + i * 2 * initialRadius / n;
    branch.radius = initialRadius;

    // 將新的branch加入集合中去
    branches.add(branch);
}

var interval = setInterval(function() {
    // 對集合内的每個元素依次進行處理
    branches.process();
    if (branches.branches.length == 0) {
        clearInterval(interval);
    }

}, 20);