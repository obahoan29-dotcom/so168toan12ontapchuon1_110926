const examData = {
  "title": "👍ĐỀ SỐ 168 - ÔN TẬP CHƯƠNG 1: HÀM SỐ VÀ ỨNG DỤNG - TOÁN 12💗",
  "password": "",
  "timeLimitMinutes": 35,
  "maxAttempts": "",
  "unlimitedAfterMins": 0,

  "images": {
    "Q1": "https://i.ibb.co/8LWV09M6/c1.png",
    "Q2": "",
    "Q3": "",
    "Q4": "https://i.ibb.co/M5NW72rx/c4.png",
    "Q5": "https://i.ibb.co/DfVzMZmG/c5.png",
    "Q6": "https://i.ibb.co/k6sYpCY6/c6.png",
    "Q7": "",
    "Q8": "",
    "Q9": "",
    "Q10": "",
    "Q11": "",
    "Q12": "https://i.ibb.co/G4qZQXJb/c12.png",
    "Q13": "",
    "Q14": "",
    "Q15": "",
    "Q16": "https://i.ibb.co/B5kYstpQ/c16.png",
    "Q17": "https://i.ibb.co/84n62VSd/c17.png",
    "Q18": "https://i.ibb.co/W45bLbjk/c18.png",
    "Q19": "https://i.ibb.co/vCbH7J2w/c19.png",
    "Q20": "https://i.ibb.co/Pb3Cgxg/c20.png",
    "Q21": "https://i.ibb.co/wrSwjc2K/c21.png",
    "Q22": "https://i.ibb.co/wFy9X69j/c22.png",
    "Q23": "",
    "Q24": "",
    "Q25": "https://i.ibb.co/LDqJZV97/c25.png",
    "Q26": "https://i.ibb.co/8gR6Qyzf/c26.png",
    "Q27": "",
    "Q28": "https://i.ibb.co/3msWsP10/c28.png",
    "Q29": "https://i.ibb.co/2Ynkt5PG/c29.png",
    "Q30": "https://i.ibb.co/p6NFc2xG/c30.png",
    "Q31": "https://i.ibb.co/yF5HyFVX/c31.png",
    "Q32": "https://i.ibb.co/N2RxnxzL/c32.png",
    "Q33": "https://i.ibb.co/HLtvZPns/c33.png",
    "Q34": "",
    "Q35": "https://i.ibb.co/LhdNRnpD/c35.png",
    "Q36": "",
    "Q37": "https://i.ibb.co/6RXbpcpw/c37.png",
    "Q38": "",
    "Q39": "",
    "Q40": "https://i.ibb.co/SXcpfV8S/c40.png",
    "Q41": "",
    "Q42": "",
    "Q43": "",
    "Q44": "https://i.ibb.co/GQppcWcw/c44.png",
    "Q45": "",
    "Q46": "https://i.ibb.co/wrLBM1xQ/c46.png",
    "Q47": "https://i.ibb.co/CsH4B3R0/c47.png",
    "Q48": "https://i.ibb.co/Vc5NLXzM/c48.png"
  },

  "questions": [
    // PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (33 CÂU)
    {
      "id": 1,
      "type": "multiple_choice",
      "question": "(THPT Gia Bình - Bắc Ninh 2025) Cho hàm số $y=f(x)$ có đồ thị hàm số như hình vẽ. Hàm số đồng biến trên khoảng nào?",
      "imageKey": "Q1",
      "options": [
        "$(-1;+\\infty)$",
        "$(-\\infty;-1)$",
        "$(-3;0)$",
        "$(-2;-1)$"
      ],
      "correct": 0,
      "explanation": "Dựa vào đồ thị hàm số, trên khoảng $(-1;+\\infty)$ (hay chi tiết là $(-1;0)$ và $(0;+\\infty)$) đồ thị đi lên từ trái sang phải nên hàm số đồng biến."
    },
    {
      "id": 2,
      "type": "multiple_choice",
      "question": "Khẳng định nào sau đây đúng về tính đơn điệu của hàm số $y=\\frac{2x+4}{1-x}$?",
      "imageKey": "Q2",
      "options": [
        "Hàm số đồng biến trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$",
        "Hàm số nghịch biến trên các khoảng $(-\\infty;1)\\cup(1;+\\infty)$",
        "Hàm số nghịch biến trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$",
        "Hàm số đồng biến trên các khoảng $(-\\infty;-1)$ và $(-1;+\\infty)$"
      ],
      "correct": 0,
      "explanation": "Ta có $y' = \\frac{2(1) - 4(-1)}{(1-x)^2} = \\frac{6}{(1-x)^2} > 0, \\forall x \\neq 1$. Vậy hàm số đồng biến trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$."
    },
    {
      "id": 3,
      "type": "multiple_choice",
      "question": "(THPT Lương Tài 2 - Bắc Ninh 2025) Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x)=(x+1)^3(x-1)(x-2)$. Số điểm cực trị của hàm số đã cho là:",
      "imageKey": "Q3",
      "options": [
        "1",
        "3",
        "2",
        "0"
      ],
      "correct": 1,
      "explanation": "Phương trình $f'(x)=0$ có các nghiệm $x=-1$ (bội 3), $x=1$ (nghiệm đơn), $x=2$ (nghiệm đơn). Vì đạo hàm đổi dấu khi qua cả 3 điểm này nên hàm số có 3 điểm cực trị."
    },
    {
      "id": 4,
      "type": "multiple_choice",
      "question": "(THPT Tiên Du - Bắc Ninh 2025) Cho hàm số $y=f(x)=\\frac{mx^2+nx+p}{qx+r}$ có bảng biến thiên như hình vẽ. Giá trị cực đại của hàm số đã cho bằng:",
      "imageKey": "Q4",
      "options": [
        "3",
        "-3",
        "-5",
        "1"
      ],
      "correct": 2,
      "explanation": "Dựa vào bảng biến thiên, hàm số đạt cực đại tại $x = -3$ và giá trị cực đại $y_{CĐ} = -5$."
    },
    {
      "id": 5,
      "type": "multiple_choice",
      "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có bảng xét dấu của $f'(x)$ như hình vẽ. Số điểm cực đại của hàm số đã cho là:",
      "imageKey": "Q5",
      "options": [
        "2",
        "1",
        "4",
        "3"
      ],
      "correct": 1,
      "explanation": "$f'(x)$ đổi dấu từ dương sang âm chỉ tại điểm $x = -1$. Do đó hàm số chỉ có 1 điểm cực đại."
    },
    {
      "id": 6,
      "type": "multiple_choice",
      "question": "(Cụm trường Nguyễn Hiền - Lê Hồng Phong - Quảng Nam 2025) Cho hàm đa thức $y=f(x)$. Đồ thị hàm số $y=f'(x)$ là đường cong như hình vẽ. Hỏi hàm số $y=f(x)$ có bao nhiêu điểm cực trị?",
      "imageKey": "Q6",
      "options": [
        "3",
        "1",
        "2",
        "0"
      ],
      "correct": 0,
      "explanation": "Đồ thị $y=f'(x)$ cắt trục hoành tại 3 điểm phân biệt và đổi dấu qua 3 điểm đó. Vậy hàm số $y=f(x)$ có 3 điểm cực trị."
    },
    {
      "id": 7,
      "type": "multiple_choice",
      "question": "(THPT Thạch Thành 1 - Thanh Hóa 2025) Đồ thị hàm số $y=x^3-6x^2+9x-1$ có tọa độ điểm cực đại là:",
      "imageKey": "Q7",
      "options": [
        "$(3;0)$",
        "$(3;1)$",
        "$(1;4)$",
        "$(1;3)$"
      ],
      "correct": 3,
      "explanation": "Ta có $y' = 3x^2 - 12x + 9 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Với $x = 1 \\Rightarrow y = 3$ và $y'' = -6 < 0$. Do đó tọa độ điểm cực đại là $(1;3)$."
    },
    {
      "id": 8,
      "type": "multiple_choice",
      "question": "Tiệm cận đứng của đồ thị hàm số $y=\\frac{2x-1}{x-1}$ là đường thẳng có phương trình:",
      "imageKey": "Q8",
      "options": [
        "$x=1$",
        "$x=-1$",
        "$x=2$",
        "$x=\\frac{1}{2}$"
      ],
      "correct": 0,
      "explanation": "Nghiệm của mẫu số $x - 1 = 0 \\Leftrightarrow x = 1$. Tiệm cận đứng là đường thẳng $x = 1$."
    },
    {
      "id": 9,
      "type": "multiple_choice",
      "question": "Đồ thị hàm số $y=\\frac{x-2}{x^2-4}$ có đường tiệm cận ngang là:",
      "imageKey": "Q9",
      "options": [
        "$y=2$",
        "$y=0$",
        "$y=1$",
        "$y=-2$"
      ],
      "correct": 1,
      "explanation": "Vì bậc của tử bé hơn bậc của mẫu nên $\\lim_{x \\to \\pm\\infty} y = 0$. Tiệm cận ngang là $y = 0$."
    },
    {
      "id": 10,
      "type": "multiple_choice",
      "question": "Đường tiệm cận xiên của đồ thị hàm số $f(x)=x+3+\\frac{1}{2x+1}$ có phương trình là:",
      "imageKey": "Q10",
      "options": [
        "$y=2x+1$",
        "$y=x-3$",
        "$y=x+3$",
        "$y=2x-1$"
      ],
      "correct": 2,
      "explanation": "Do $\\lim_{x \\to \\pm\\infty} [f(x) - (x+3)] = \\lim_{x \\to \\pm\\infty} \\frac{1}{2x+1} = 0$, tiệm cận xiên là $y = x + 3$."
    },
    {
      "id": 11,
      "type": "multiple_choice",
      "question": "Tìm đường tiệm cận xiên của đồ thị hàm số $f(x)=\\frac{x^2-3x+1}{x-2}$.",
      "imageKey": "Q11",
      "options": [
        "$y=x+1$",
        "$y=-3x+1$",
        "$y=x-2$",
        "$y=x-1$"
      ],
      "correct": 3,
      "explanation": "Ta có $f(x) = x - 1 - \\frac{1}{x-2}$. Tiệm cận xiên có phương trình $y = x - 1$."
    },
    {
      "id": 12,
      "type": "multiple_choice",
      "question": "Cho hàm số $f(x)$ liên tục trên đoạn $[-2;2]$ có đồ thị như hình vẽ. Giá trị nhỏ nhất của hàm số trên đoạn $[-2;2]$ là:",
      "imageKey": "Q12",
      "options": [
        "1",
        "-1",
        "-2",
        "3"
      ],
      "correct": 1,
      "explanation": "Dựa vào đồ thị trên đoạn $[-2;2]$, điểm thấp nhất có tung độ bằng $-1$ tại $x = 1$."
    },
    {
      "id": 13,
      "type": "multiple_choice",
      "question": "Gọi $M, m$ lần lượt là giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y=\\frac{1}{3}x^3-2x^2+3x+1$ trên đoạn $[0;4]$. Tính tổng $S=M+m$.",
      "imageKey": "Q13",
      "options": [
        "$\\frac{7}{3}$",
        "1",
        "$\\frac{10}{3}$",
        "4"
      ],
      "correct": 2,
      "explanation": "$y' = x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1, x = 3$. Tính $y(0)=1, y(1)=\\frac{7}{3}, y(3)=1, y(4)=\\frac{7}{3}$. Vậy $M = \\frac{7}{3}, m = 1 \\Rightarrow S = \\frac{7}{3} + 1 = \\frac{10}{3}$."
    },
    {
      "id": 14,
      "type": "multiple_choice",
      "question": "Giá trị lớn nhất của hàm số $f(x)=\\frac{x^2+3}{x-1}$ trên đoạn $[2;4]$ là:",
      "imageKey": "Q14",
      "options": [
        "7",
        "8",
        "$\\frac{19}{3}$",
        "$\\frac{23}{3}$"
      ],
      "correct": 0,
      "explanation": "$f'(x) = \\frac{x^2-2x-3}{(x-1)^2} = 0 \\Leftrightarrow x = 3 \\in [2;4]$. Ta có $f(2) = 7, f(3) = 6, f(4) = \\frac{19}{3}$. Vậy $\\max_{[2;4]} f(x) = 7$."
    },
    {
      "id": 15,
      "type": "multiple_choice",
      "question": "Tiệm cận xiên của đồ thị hàm số $y=\\frac{-x^2-3x+4}{x+2}$ là đường thẳng có phương trình:",
      "imageKey": "Q15",
      "options": [
        "$y=-x-1$",
        "$y=x-1$",
        "$y=-x+1$",
        "$y=x+1$"
      ],
      "correct": 0,
      "explanation": "Ta phân tích $y = -x - 1 + \\frac{6}{x+2}$. Do đó đường tiệm cận xiên là $y = -x - 1$."
    },
    {
      "id": 16,
      "type": "multiple_choice",
      "question": "Bảng biến thiên dưới đây là của hàm số nào trong các hàm số sau?",
      "imageKey": "Q16",
      "options": [
        "$y=-x^3+3x^2-3$",
        "$y=x^3+3x^2-1$",
        "$y=x^3-3x+2$",
        "$y=x^3-3x^2+2$"
      ],
      "correct": 3,
      "explanation": "BBT có các điểm cực trị $x=0 \\Rightarrow y=2$ (cực đại) và $x=2 \\Rightarrow y=-2$ (cực tiểu). Hàm $y = x^3 - 3x^2 + 2$ thỏa mãn điều kiện này."
    },
    {
      "id": 17,
      "type": "multiple_choice",
      "question": "Cho hàm số $y=\\frac{ax+b}{cx-1}$ có đồ thị như hình vẽ. Giá trị của tổng $S=a+b+c$ bằng:",
      "imageKey": "Q17",
      "options": [
        "$S=0$",
        "$S=-2$",
        "$S=2$",
        "$S=4$"
      ],
      "correct": 2,
      "explanation": "TCĐ $x = \\frac{1}{c} = 1 \\Rightarrow c = 1$. TCN $y = \\frac{a}{c} = -1 \\Rightarrow a = -1$. Đồ thị cắt $Ox$ tại $(2;0) \\Rightarrow 2a+b=0 \\Rightarrow b = 2$. Vậy $S = -1 + 2 + 1 = 2$."
    },
    {
      "id": 18,
      "type": "multiple_choice",
      "question": "Đường cong trong hình bên là đồ thị của hàm số nào trong bốn hàm số dưới đây?",
      "imageKey": "Q18",
      "options": [
        "$y=x^3-3x-1$",
        "$y=x^3-3x^2+1$",
        "$y=-x^3+3x+1$",
        "$y=x^3-3x+1$"
      ],
      "correct": 3,
      "explanation": "Đồ thị hàm số bậc ba với hệ số $a > 0$, cắt trục $Oy$ tại $(0;1)$, có hai điểm cực trị là $x = \\pm 1$ tương ứng hàm $y = x^3 - 3x + 1$."
    },
    {
      "id": 19,
      "type": "multiple_choice",
      "question": "Cho hàm số $f(x)=\\frac{ax-6}{bx-c}$ ($a,b,c \\in \\mathbb{R}$) có bảng biến thiên như hình vẽ. Trong các số $a,b,c$ có bao nhiêu số âm?",
      "imageKey": "Q19",
      "options": [
        "3",
        "1",
        "2",
        "0"
      ],
      "correct": 2,
      "explanation": "Từ BBT: TCĐ $x = \\frac{c}{b} = -2 \\Rightarrow c = -2b$. TCN $y = \\frac{a}{b} = 1 \\Rightarrow a = b$. Chọn $b > 0 \\Rightarrow a > 0, c < 0$. Xét dấu ta suy ra có 2 số âm."
    },
    {
      "id": 20,
      "type": "multiple_choice",
      "question": "Đồ thị ở hình bên là của một trong bốn hàm số sau. Hỏi đó là hàm số nào?",
      "imageKey": "Q20",
      "options": [
        "$y=\\frac{x^2-x-1}{x-2}$",
        "$y=\\frac{x^2+x-1}{x-2}$",
        "$y=\\frac{x^2-2x-1}{x-2}$",
        "$y=\\frac{x^2-x+1}{x-2}$"
      ],
      "correct": 0,
      "explanation": "Đồ thị có TCĐ $x = 2$, TCX $y = x + 1$, cắt $Oy$ tại $(0; 1/2)$. Phương trình thỏa mãn là $y = \\frac{x^2-x-1}{x-2} = x + 1 + \\frac{1}{x-2}$."
    },
    {
      "id": 21,
      "type": "multiple_choice",
      "question": "Cho hàm số $y=ax^3+bx^2+cx+d$ ($a,b,c,d \\in \\mathbb{R}$) có đồ thị như hình vẽ. Có bao nhiêu số dương trong các số $a,b,c,d$?",
      "imageKey": "Q21",
      "options": [
        "4",
        "2",
        "1",
        "3"
      ],
      "correct": 2,
      "explanation": "Nhánh cuối đi xuống $\\Rightarrow a < 0$. Đồ thị cắt $Oy$ tại tung độ dương $\Rightarrow d > 0$. Hai điểm cực trị dương $x_1, x_2 > 0 \\Rightarrow b < 0, c < 0$. Vậy chỉ có 1 số dương ($d > 0$)."
    },
    {
      "id": 22,
      "type": "multiple_choice",
      "question": "Trong các hàm số sau, hàm số nào có bảng biến thiên như hình vẽ?",
      "imageKey": "Q22",
      "options": [
        "$y=\\frac{x+1}{x-2}$",
        "$y=\\frac{x+3}{x-2}$",
        "$y=\\frac{x-1}{x-2}$",
        "$y=\\frac{x-3}{x-2}$"
      ],
      "correct": 3,
      "explanation": "BBT thể hiện hàm số đồng biến trên từng khoảng xác định, TCĐ $x=2$, TCN $y=1$. Hàm $y=\\frac{x-3}{x-2}$ có $y' = \\frac{1}{(x-2)^2} > 0$."
    },
    {
      "id": 23,
      "type": "multiple_choice",
      "question": "Một vật chuyển động theo quy luật $v(t) = -\\frac{1}{3}t^3 + 4t^2 + 9t$ (m/s). Hỏi trong 12 giây đầu tiên kể từ lúc bắt đầu chuyển động, vật đạt được vận tốc lớn nhất là bao nhiêu?",
      "imageKey": "Q23",
      "options": [
        "120 m/s",
        "144 m/s",
        "162 m/s",
        "180 m/s"
      ],
      "correct": 2,
      "explanation": "$v'(t) = -t^2 + 8t + 9 = 0 \\Leftrightarrow t = 9$ s (nhận) hoặc $t = -1$. Tại $t = 9$, $v(9) = -\\frac{1}{3}(9)^3 + 4(9)^2 + 9(9) = 162$ m/s."
    },
    {
      "id": 24,
      "type": "multiple_choice",
      "question": "Một chất điểm chuyển động thẳng với phương trình $s(t)=t^3+3t-1$ ($t$ tính bằng giây, $s(t)$ tính bằng mét). Tính vận tốc của chất điểm tại thời điểm $t=5$ (s).",
      "imageKey": "Q24",
      "options": [
        "139 m/s",
        "78 m/s",
        "77 m/s",
        "30 m/s"
      ],
      "correct": 1,
      "explanation": "Vận tốc $v(t) = s'(t) = 3t^2 + 3$. Tại $t = 5 \\Rightarrow v(5) = 3(5)^2 + 3 = 78$ m/s."
    },
    {
      "id": 25,
      "type": "multiple_choice",
      "question": "Đồ thị trong hình bên dưới là đồ thị của hàm số nào trong các hàm số sau?",
      "imageKey": "Q25",
      "options": [
        "$y=x-\\frac{1}{x+1}$",
        "$y=\\frac{2x+1}{x+1}$",
        "$y=\\frac{x^2-x+1}{x+1}$",
        "$y=\\frac{x^2+x+1}{x+1}$"
      ],
      "correct": 3,
      "explanation": "Đồ thị có tiệm cận đứng $x = -1$, tiệm cận xiên $y = x$. Hàm số $y = \\frac{x^2+x+1}{x+1} = x + \\frac{1}{x+1}$ thỏa mãn."
    },
    {
      "id": 26,
      "type": "multiple_choice",
      "question": "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có bảng biến thiên như hình vẽ. Giá trị cực tiểu của hàm số $y=f(x)$ là:",
      "imageKey": "Q26",
      "options": [
        "-10",
        "11",
        "6",
        "-20"
      ],
      "correct": 3,
      "explanation": "Từ bảng biến thiên, giá trị cực tiểu của hàm số là $y_{CT} = -20$ tại $x = 2$."
    },
    {
      "id": 27,
      "type": "multiple_choice",
      "question": "Tìm giá trị nhỏ nhất của hàm số $y=f(x)=x^2+3x$ trên đoạn $[0;2]$.",
      "imageKey": "Q27",
      "options": [
        "0",
        "$-\\frac{3}{2}$",
        "$-\\frac{9}{4}$",
        "10"
      ],
      "correct": 0,
      "explanation": "$y' = 2x + 3 > 0, \\forall x \\in [0;2]$. Hàm số đồng biến trên $[0;2]$ nên giá trị nhỏ nhất là $f(0) = 0$."
    },
    {
      "id": 28,
      "type": "multiple_choice",
      "question": "Đường cong trong hình vẽ sau là đồ thị của hàm số nào dưới đây?",
      "imageKey": "Q28",
      "options": [
        "$y=\\frac{-2x+1}{x+1}$",
        "$y=\\frac{2x-1}{x-1}$",
        "$y=\\frac{x+1}{x-1}$",
        "$y=\\frac{x-1}{x+1}$"
      ],
      "correct": 2,
      "explanation": "Đồ thị có TCĐ $x = 1$, TCN $y = 1$, cắt $Oy$ tại $(0;-1)$, cắt $Ox$ tại $(-1;0)$. Phương trình tương ứng là $y = \\frac{x+1}{x-1}$."
    },
    {
      "id": 29,
      "type": "multiple_choice",
      "question": "Đường cong trong hình bên là đồ thị của hàm số nào sau đây?",
      "imageKey": "Q29",
      "options": [
        "$y=-x^3-3x^2-2$",
        "$y=x^3+3x^2-2$",
        "$y=x^3-3x^2-2$",
        "$y=-x^3+3x^2-2$"
      ],
      "correct": 1,
      "explanation": "Hàm số bậc ba với $a > 0$, cực đại tại $x = -2 (y = 2)$, cực tiểu tại $x = 0 (y = -2)$. Hàm số là $y = x^3 + 3x^2 - 2$."
    },
    {
      "id": 30,
      "type": "multiple_choice",
      "question": "Cho đồ thị hàm số $y = ax^3+bx^2+cx+d$. Tìm dấu của các hệ số $a, b, c, d$.",
      "imageKey": "Q30",
      "options": [
        "$a>0, b<0, c>0, d<0$",
        "$a<0, b<0, c<0, d<0$",
        "$a>0, b<0, c>0, d>0$",
        "$a>0, b>0, c>0, d<0$"
      ],
      "correct": 0,
      "explanation": "Nhánh cuối đi lên $\\Rightarrow a > 0$. Đồ thị cắt $Oy$ ở tung độ âm $\Rightarrow d < 0$. Hai điểm cực trị đều dương $x_1, x_2 > 0 \\Rightarrow x_1+x_2 = -2b/3a > 0 \\Rightarrow b < 0$; $x_1 x_2 = c/3a > 0 \\Rightarrow c > 0$."
    },
    {
      "id": 31,
      "type": "multiple_choice",
      "question": "Trong bốn hàm số được liệt kê ở bốn phương án dưới đây, hàm số nào có bảng biến thiên như hình vẽ?",
      "imageKey": "Q31",
      "options": [
        "$y=\\frac{(x-1)^2}{x-2}$",
        "$y=\\frac{(x-1)^2}{x+2}$",
        "$y=\\frac{(x-1)^2}{-x-2}$",
        "$y=\\frac{(x-1)^2}{-x+2}$"
      ],
      "correct": 0,
      "explanation": "TCĐ $x = 2$, cực đại tại $x=1 (y=0)$, cực tiểu tại $x=3 (y=4)$. Tương ứng với $y = \\frac{(x-1)^2}{x-2}$."
    },
    {
      "id": 32,
      "type": "multiple_choice",
      "question": "Đường cong ở hình bên là đồ thị của một trong bốn hàm số dưới đây. Hàm số đó là hàm số nào?",
      "imageKey": "Q32",
      "options": [
        "$y=\\frac{x^2+2x+2}{x+1}$",
        "$y=\\frac{x^2+2x+2}{-x-1}$",
        "$y=\\frac{x^2-2x+2}{x-1}$",
        "$y=\\frac{x^2-2x+2}{x+1}$"
      ],
      "correct": 0,
      "explanation": "TCĐ $x = -1$, TCX $y = x + 1$. Phương trình phù hợp là $y = \\frac{x^2+2x+2}{x+1} = x + 1 + \\frac{1}{x+1}$."
    },
    {
      "id": 33,
      "type": "multiple_choice",
      "question": "Người ta muốn xây một chiếc bể nước có hình dạng khối hộp chữ nhật không nắp có thể tích bằng $\\frac{500}{3}\\text{ m}^3$. Đáy bể là hình chữ nhật có chiều dài gấp đôi chiều rộng và giá thuê thợ xây là 700 000 đồng/$m^2$. Tìm kích thước bể để chi phí thuê nhân công ít nhất. Khi đó chi phí là:",
      "imageKey": "Q33",
      "options": [
        "120 triệu đồng",
        "105 triệu đồng",
        "115 triệu đồng",
        "110 triệu đồng"
      ],
      "correct": 1,
      "explanation": "Gọi chiều rộng đáy là $x \\Rightarrow$ chiều dài $2x$, chiều cao $h = \\frac{250}{3x^2}$. Diện tích xây $S(x) = 2x^2 + 6xh = 2x^2 + \\frac{500}{x}$. $S'(x) = 0 \\Leftrightarrow x = 5$ m. Diện tích tối thiểu $S = 150\\text{ m}^2$. Chi phí = $150 \\times 700.000 = 105.000.000$ đồng = 105 triệu đồng."
    },

    // PHẦN II: TRẮC NGHIỆM ĐÚNG SAI (2 CÂU)
    {
      "id": 34,
      "type": "true_false",
      "question": "Cho hàm số $y=\\frac{-x^2-3x+4}{x-3}$ có đồ thị là $(C)$. Xét tính đúng sai của các khẳng định sau:",
      "imageKey": "Q34",
      "statements": [
        {
          "id": "a",
          "statement": "Đồ thị $(C)$ có tiệm cận xiên là $y=-x-6$.",
          "correct": true
        },
        {
          "id": "b",
          "statement": "Đồ thị $(C)$ nhận giao điểm $I(3;-9)$ làm tâm đối xứng.",
          "correct": true
        },
        {
          "id": "c",
          "statement": "Đồ thị $(C)$ có hai điểm cực trị nằm 2 phía đối với $Oy$.",
          "correct": true
        },
        {
          "id": "d",
          "statement": "Đồ thị không cắt trục $Ox$.",
          "correct": false
        }
      ]
    },
    {
      "id": 35,
      "type": "true_false",
      "question": "Một cơ sở sản xuất áo thun bán mỗi chiếc áo giá 40 000 đồng và mỗi tháng bán được trung bình 4000 chiếc. Cứ tăng giá thêm 1000 đồng thì mỗi tháng bán ít hơn 100 chiếc áo. Vốn sản xuất một chiếc áo là 25 000 đồng. Xét tính đúng sai của các khẳng định sau:",
      "imageKey": "Q35",
      "statements": [
        {
          "id": "a",
          "statement": "Nếu cơ sở bán mỗi chiếc áo với giá 50 000 đồng thì số tiền lãi sau mỗi tháng là 75 triệu đồng.",
          "correct": true
        },
        {
          "id": "b",
          "statement": "Sau khi cơ sở tăng giá mỗi chiếc áo thêm $x$ (nghìn đồng) thì tổng lợi nhuận một tháng được tính theo công thức $f(x)=-100x^2+2500x+60000$ (nghìn đồng).",
          "correct": true
        },
        {
          "id": "c",
          "statement": "Để đạt lợi nhuận lớn nhất thì số áo bán ra giảm 1250 chiếc.",
          "correct": true
        },
        {
          "id": "d",
          "statement": "Để đạt lợi nhuận lớn nhất thì mỗi chiếc áo cần bán với giá 52 500 đồng.",
          "correct": true
        }
      ]
    },

    // PHẦN III: TRẢ LỜI NGẮN (13 CÂU)
    {
      "id": 36,
      "type": "short_answer",
      "question": "Cho hàm số $y=\\frac{2x-1}{3x-2}$. Đồ thị hàm số có đường tiệm cận đứng và tiệm cận ngang lần lượt là các đường thẳng $x=a$ và $y=b$. Tính $S=3a+6b$.",
      "imageKey": "Q36",
      "correctAnswer": "6",
      "explanation": "Tiệm cận đứng $x = a = \\frac{2}{3}$, tiệm cận ngang $y = b = \\frac{2}{3}$. Khi đó $S = 3\\left(\\frac{2}{3}\\right) + 6\\left(\\frac{2}{3}\\right) = 2 + 4 = 6$."
    },
    {
      "id": 37,
      "type": "short_answer",
      "question": "Cho hàm số $y=ax^3+bx^2+cx+d$ có đồ thị như hình vẽ. Tính giá trị biểu thức $T=a+2b+3c+4d$.",
      "imageKey": "Q37",
      "correctAnswer": "-11",
      "explanation": "Dựa vào đồ thị ta xác định các hệ số $a, b, c, d$ và tính được $T = -11$."
    },
    {
      "id": 38,
      "type": "short_answer",
      "question": "Một loại vi khuẩn được tiêm thuốc kích thích sinh sản. Sau $t$ phút, số vi khuẩn được xác định theo $N(t)=1000+30t^2-t^3$ ($0\\le t\\le 30$). Hỏi sau bao nhiêu giây thì số vi khuẩn lớn nhất?",
      "imageKey": "Q38",
      "correctAnswer": "1200",
      "explanation": "$N'(t) = 60t - 3t^2 = 0 \\Leftrightarrow t = 20$ (phút) hoặc $t = 0$. $N(t)$ đạt cực đại tại $t = 20$ phút. Đổi ra giây: $20 \\times 60 = 1200$ giây."
    },
    {
      "id": 39,
      "type": "short_answer",
      "question": "Độ giảm huyết áp của một bệnh nhân là $G(x)=0,025x^2(30-x)$, trong đó $x$ là số miligam thuốc được tiêm ($0<x<30$). Để huyết áp giảm nhiều nhất thì liều lượng thuốc cần tiêm vào là bao nhiêu mg?",
      "imageKey": "Q39",
      "correctAnswer": "20",
      "explanation": "$G(x) = 0,025(30x^2 - x^3) \\Rightarrow G'(x) = 0,025(60x - 3x^2) = 0 \\Leftrightarrow x = 20$ mg."
    },
    {
      "id": 40,
      "type": "short_answer",
      "question": "Vận tốc của một tàu con thoi từ $t=0$ (s) đến $t=100$ (s) được cho bởi $v(t)=0,0015t^3-0,085t^2+70$ (ft/s). Hỏi trong thời gian đó tàu con thoi đạt vận tốc lớn nhất bằng bao nhiêu ft/s (làm tròn đến hàng đơn vị)?",
      "imageKey": "Q40",
      "correctAnswer": "720",
      "explanation": "$v'(t) = 0,0045t^2 - 0,17t = 0 \\Leftrightarrow t = 0$ hoặc $t \\approx 37,78$. Xét $v(0) = 70$, $v(37,78) \\approx 29,5$, $v(100) = 720$. Vận tốc lớn nhất là 720 ft/s."
    },
    {
      "id": 41,
      "type": "short_answer",
      "question": "Sản xuất một bể nước hình lăng trụ tứ giác đều không nắp có thể tích $32\\text{ m}^3$. Giá kính là $600.000$ đồng/$m^2$. Số tiền tối thiểu phải trả để làm bể là bao nhiêu triệu đồng (làm tròn đến hàng phần chục)?",
      "imageKey": "Q41",
      "correctAnswer": "28,8",
      "explanation": "$V = x^2 h = 32 \\Rightarrow h = \\frac{32}{x^2}$. Diện tích kính $S = x^2 + 4xh = x^2 + \\frac{128}{x} \\ge 48\\text{ m}^2$. Số tiền nhỏ nhất $= 48 \\times 0,6 = 28,8$ triệu đồng."
    },
    {
      "id": 42,
      "type": "short_answer",
      "question": "Một bác nông dân có 360 m hàng rào muốn rào khu đất hình chữ nhật tiếp giáp bờ sông (không rào phía bờ sông). Hỏi diện tích lớn nhất có thể rào được là bao nhiêu mét vuông?",
      "imageKey": "Q42",
      "correctAnswer": "16200",
      "explanation": "Chiều rộng là $x$, chiều dài là $360 - 2x$. Diện tích $S = x(360 - 2x) = -2x^2 + 360x$. Giá trị lớn nhất đạt được tại $x = 90$, khi đó $S = 16200\\text{ m}^2$."
    },
    {
      "id": 43,
      "type": "short_answer",
      "question": "Gia đình đan $x$ mét lưới/ngày ($1\\le x\\le 18$), chi phí $C(x)=x^3-3x^2-20x+500$ (nghìn đồng). Giá bán là 220 nghìn đồng/mét. Hỏi lợi nhuận tối đa trong một ngày là bao nhiêu (nghìn đồng)?",
      "imageKey": "Q43",
      "correctAnswer": "1200",
      "explanation": "Lợi nhuận $L(x) = 220x - C(x) = -x^3 + 3x^2 + 240x - 500$. $L'(x) = -3x^2 + 6x + 240 = 0 \\Leftrightarrow x = 10$. $L(10) = 1200$ nghìn đồng."
    },
    {
      "id": 44,
      "type": "short_answer",
      "question": "Tấm nhôm hình vuông cạnh 12 cm. Cắt ở 4 góc 4 hình vuông bằng nhau cạnh $x$ (cm) rồi gập lại thành hộp không nắp. Tìm $x$ để thể tích hộp lớn nhất.",
      "imageKey": "Q44",
      "correctAnswer": "2",
      "explanation": "$V(x) = x(12 - 2x)^2$. Lấy đạo hàm $V'(x) = 0 \\Rightarrow x = 2$ cm."
    },
    {
      "id": 45,
      "type": "short_answer",
      "question": "Nhà máy A cung cấp tối đa 100 tấn sản phẩm/tháng cho nhà máy B. Giá bán $P(x)=45-0,001x^2$ (triệu đồng/tấn). Chi phí $C(x)=100+30x$ (triệu đồng). Cần bán bao nhiêu tấn sản phẩm/tháng để lợi nhuận lớn nhất (làm tròn đến hàng phần mười)?",
      "imageKey": "Q45",
      "correctAnswer": "70,7",
      "explanation": "Lợi nhuận $L(x) = x P(x) - C(x) = 15x - 0,001x^3 - 100$. $L'(x) = 15 - 0,003x^2 = 0 \\Leftrightarrow x = \\sqrt{5000} \\approx 70,7$ tấn."
    },
    {
      "id": 46,
      "type": "short_answer",
      "question": "Hình chữ nhật $ABCD$ có $AD=2$ km, $AB=6$ km. Tốc độ đi trên đồng là 4 km/h, đi trên đường CD là 8 km/h. Người đó đi từ A đến E trên CD rồi đi tới C. Hỏi E cách D bao xa để tổng thời gian ít nhất (làm tròn đến hàng phần trăm)?",
      "imageKey": "Q46",
      "correctAnswer": "1,15",
      "explanation": "Đặt $DE = x \\Rightarrow AE = \\sqrt{x^2 + 4}$, $EC = 6 - x$. Thời gian $t(x) = \\frac{\\sqrt{x^2+4}}{4} + \\frac{6-x}{8}$. $t'(x) = 0 \\Leftrightarrow x = \\frac{2}{\\sqrt{3}} \\approx 1,15$ km."
    },
    {
      "id": 47,
      "type": "short_answer",
      "question": "Trang trại thu hoạch 1 tấn rau/ngày. Bán giá 30 000 đồng/kg thì bán hết. Tăng 1000 đồng/kg thì thừa 20 kg (bán chăn nuôi 2000 đồng/kg). Hỏi để thu nhiều tiền nhất thì trang trại nên bán rau với giá bao nhiêu nghìn đồng?",
      "imageKey": "Q47",
      "correctAnswer": "41",
      "explanation": "Gọi số tiền tăng thêm là $x$ nghìn đồng ($x \\ge 0$). Tổng doanh thu $T(x) = (30 + x)(1000 - 20x) + 20x \\times 2 = -20x^2 + 440x + 30000$. Đạt max tại $x = 11$. Vậy giá bán là $30 + 11 = 41$ nghìn đồng."
    },
    {
      "id": 48,
      "type": "short_answer",
      "question": "Cho tấm bìa hình vuông cạnh 10cm, cắt theo các tam giác cân để tạo khối chóp tứ giác đều. Thể tích lớn nhất tạo thành bằng $\\frac{a\\sqrt{b}}{c}$ ($a,b,c \\in \\mathbb{Z}^+$). Tính $P=a+b+c$.",
      "imageKey": "Q48",
      "correctAnswer": "29",
      "explanation": "Tính toán tối ưu thể tích khối chóp thu được $P = a + b + c = 29$."
    }
  ]
};