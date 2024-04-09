// 생성자 및 add 함수 추가

function InputFileList(input) {
    this.input = input;
}

InputFileList.prototype = {
    add: function (file) {
        var dt = new DataTransfer();
        var files = this.input.files;

        for (var existingFile of files)
            dt.items.add(existingFile);

        //추가로 담는 파일
        dt.items.add(file);
        this.input.files = dt.files;
    }
};


// 카테고리 버튼
window.addEventListener("load", function () {
    const category = this.document.querySelector('#category');
    const selectedOptionCategory = category.querySelector('.selected-option-category');
    const optionsCategory = category.querySelectorAll('.option-category');
    const selectedCategory = category.querySelector('.selected-category');
    const optionCategoryList = category.querySelector('.option-category-list');

    //드롭다운 최초 클릭 시 이벤트 처리
    selectedOptionCategory.addEventListener('click', function (e) {
        e.stopPropagation(); //이벤트 버블링 방지
        optionCategoryList.classList.toggle('active'); // 카테고리 옵션 목록의 표시/숨김을 토글
    });

    // 드롭다운 클릭하여 아래로 펼쳐졌을 때 카테고리 옵션 항목 클릭 시 이벤트 처리
    for (const option of optionsCategory) {
        option.addEventListener('click', function (e) {
            e.stopPropagation(); // 이벤트 버블링 방지
            const selectedValueCategory = this.getAttribute('data-value'); // 선택된 카테고리 값
            selectedOptionCategory.textContent = this.textContent; // 선택된 카테고리 표시 업데이트
            selectedCategory.value = selectedValueCategory; // 선택된 카테고리 값 업데이트 (hidden 되어있음)
            optionCategoryList.classList.remove('active'); // 원하는 값 클릭 후 펼쳐진 목록 사라짐
        });
    }

    // 문서의 다른 부분을 클릭했을 때 드롭다운 메뉴가 열려있는 경우 드롭다운 메뉴를 닫음
    window.addEventListener('click', function (e) {
        if (!selectedOptionCategory.contains(e.target)) { // 클릭한 요소가 선택된 카테고리 영역이 아니라면
            optionCategoryList.classList.remove('active'); // 카테고리 옵션 목록을 숨김
        }
    })
});

// weightCategory 선택 버튼
window.addEventListener("load", function () {
    const weight = this.document.querySelector('#weight');
    const selectedOptionWeight = weight.querySelector('.selected-option-weight');
    const optionsWeight = weight.querySelectorAll('.option-weight');
    const selectedWeight = weight.querySelector('.selected-weight');
    const optionWeightList = weight.querySelector('.option-weight-list');

    //드롭다운 최초 클릭 시 이벤트 처리
    selectedOptionWeight.addEventListener('click', function (e) {
        e.stopPropagation(); //이벤트 버블링 방지
        optionWeightList.classList.toggle('active'); // 카테고리 옵션 목록의 표시/숨김을 토글
    });

    // 드롭다운 클릭하여 아래로 펼쳐졌을 때 카테고리 옵션 항목 클릭 시 이벤트 처리
    optionsWeight.forEach(function (option) {
        option.addEventListener('click', function (e) {
            e.stopPropagation(); // 이벤트 버블링 방지
            const selectedValueWeight = this.getAttribute('data-value'); // 선택된 카테고리 값
            selectedOptionWeight.textContent = this.textContent; // 선택된 카테고리 표시 업데이트
            selectedWeight.value = selectedValueWeight; // 선택된 카테고리 값 업데이트 (hidden 되어있음)
            optionWeightList.classList.remove('active'); // 원하는 값 클릭 후 펼쳐진 목록 사라짐
        });
    });

    // 문서의 다른 부분을 클릭했을 때 드롭다운 메뉴가 열려있는 경우 드롭다운 메뉴를 닫음
    window.addEventListener('click', function (e) {
        if (!selectedOptionWeight.contains(e.target)) { // 클릭한 요소가 선택된 카테고리 영역이 아니라면
            optionWeightList.classList.remove('active'); // 카테고리 옵션 목록을 숨김
        }
    })
});

//quantityCategory 선택 버튼

window.addEventListener("load", function () {
    const quantity = this.document.querySelector('#quantity');
    const selectedOptionQuantity = quantity.querySelector('.selected-option-quantity');
    const optionsQuantity = quantity.querySelectorAll('.option-quantity');
    const selectedQuantity = quantity.querySelector('.selected-quantity');
    const optionQuantityList = quantity.querySelector('.option-quantity-list');

    //드롭다운 최초 클릭 시 이벤트 처리
    selectedOptionQuantity.addEventListener('click', function (e) {
        e.stopPropagation(); //이벤트 버블링 방지
        optionQuantityList.classList.toggle('active'); // 카테고리 옵션 목록의 표시/숨김을 토글
    });

    // 드롭다운 클릭하여 아래로 펼쳐졌을 때 카테고리 옵션 항목 클릭 시 이벤트 처리
    optionsQuantity.forEach(function (option) {
        option.addEventListener('click', function (e) {
            e.stopPropagation(); // 이벤트 버블링 방지
            const selectedValueQuantity = this.getAttribute('data-value'); // 선택된 카테고리 값
            selectedOptionQuantity.textContent = this.textContent; // 선택된 카테고리 표시 업데이트
            selectedQuantity.value = selectedValueQuantity; // 선택된 카테고리 값 업데이트 (hidden 되어있음)
            optionQuantityList.classList.remove('active'); // 원하는 값 클릭 후 펼쳐진 목록 사라짐
        });
    });

    // 문서의 다른 부분을 클릭했을 때 드롭다운 메뉴가 열려있는 경우 드롭다운 메뉴를 닫음
    window.addEventListener('click', function (e) {
        if (!selectedOptionQuantity.contains(e.target)) { // 클릭한 요소가 선택된 카테고리 영역이 아니라면
            optionQuantityList.classList.remove('active'); // 카테고리 옵션 목록을 숨김
        }
    })
});

//상품 보관유형 선택 버튼

window.addEventListener("load", function () {
    const storage = this.document.querySelector('#storage');
    const selectedOptionStorage = storage.querySelector('.selected-option-storage');
    const optionsStorage = storage.querySelectorAll('.option-storage');
    const selectedStorage = storage.querySelector('.selected-storage');
    const optionStorageList = storage.querySelector('.option-storage-list');

    //드롭다운 최초 클릭 시 이벤트 처리
    selectedOptionStorage.addEventListener('click', function (e) {
        e.stopPropagation(); //이벤트 버블링 방지
        optionStorageList.classList.toggle('active'); // 카테고리 옵션 목록의 표시/숨김을 토글
    });

    // 드롭다운 클릭하여 아래로 펼쳐졌을 때 카테고리 옵션 항목 클릭 시 이벤트 처리
    optionsStorage.forEach(function (option) {
        option.addEventListener('click', function (e) {
            e.stopPropagation(); // 이벤트 버블링 방지
            const selectedValueStorage = this.getAttribute('data-value'); // 선택된 카테고리 값
            selectedOptionStorage.textContent = this.textContent; // 선택된 카테고리 표시 업데이트
            selectedStorage.value = selectedValueStorage; // 선택된 카테고리 값 업데이트 (hidden 되어있음)
            optionStorageList.classList.remove('active'); // 원하는 값 클릭 후 펼쳐진 목록 사라짐
        });
    });

    // 문서의 다른 부분을 클릭했을 때 드롭다운 메뉴가 열려있는 경우 드롭다운 메뉴를 닫음
    window.addEventListener('click', function (e) {
        if (!selectedOptionStorage.contains(e.target)) { // 클릭한 요소가 선택된 카테고리 영역이 아니라면
            optionStorageList.classList.remove('active'); // 카테고리 옵션 목록을 숨김
        }
    })
});

// ===============================================================
// 사진 넣기 기능
window.addEventListener("load", function () {
    var regForm = this.document.querySelector("#reg-form");
    var imgInput = regForm.querySelector(".img-input");
    var preview = regForm.querySelector(".preview");
    //var previewImage = previewPanel.getElementsByTagName("img")[0];
    var upload = regForm.querySelector(".upload");

    // 드래그
    preview.ondragenter = function (e) {
        preview.classList.add("bd");
        preview.classList.add("bd-color:main-6");
    };

    preview.ondragleave = function (e) {
        preview.classList.remove("bd");
        preview.classList.remove("bd-color:main-6");
        preview.classList.remove("invalid");
    };

    preview.ondragover = function (e) {
        e.stopPropagation();
        e.preventDefault();

        var valid = e.dataTransfer &&
            e.dataTransfer.types &&
            e.dataTransfer.types.indexOf("Files") >= 0;

        if (!valid)
            preview.classList.add("invalid");
        else
            preview.classList.remove("invalid");
    };

    preview.ondrop = function (e) {
        e.stopPropagation();
        e.preventDefault();
        preview.classList.remove("bd");
        preview.classList.remove("bd-color:main-6");

        var files = e.dataTransfer.files;
        var file = files[0];

        new InputFileList(imgInput).add(file);

        if (file.type.indexOf("image/") !== 0) {
            alert("이미지만 업로드 할 수 있습니다.")
            return;
        } // 타입 제약

        if (file.size > 100 * 1024) {
            alert("크기는 100KB 이하만 얿로드 할 수 있습니다.")
            return;
        }// 크기 제약

        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement("img");
            img.src = e.target.result;
            // previewPanner = appendChild();
            preview.append(img);

            setTimeout(() => {
                img.classList.add("slide-in");
            }, 10);
        };
        reader.readAsDataURL(file);

        console.log(e.dataTransfer.types);

    };


    imgInput.oninput = function (e) {
        var files = imgInput.files;

        for (file of files) {
            if (file.type.indexOf("image/") != 0) {// file type 제약
                alert("이미지 파일만 업로드 할 수 있습니다.");
                return;
            }

            if (file.size > 3000 * 1024) {// file size 제약
                alert("3MB보다 크기가 작은 파일만 업로드 할 수 있습니다.");
                return;
            }

            // 입력상자에 있는 파일을 읽어들이는 것
            var reader = new FileReader();
            reader.onload = function (e) {

                var img = document.createElement("img");
                img.src = e.target.result;

                console.log(e.target.result);
                preview.append(img);          // element가 가진 기능

            }
            reader.readAsDataURL(file);

            console.log("file : ", file.name);
        }

        console.log("Hello!");
        //console.log(previewImages);
    };


});


// 임시저장 쿠키
class Cookie {
    constructor() {
        this.map = {};
        console.log("document.cookie = " + document.cookie);
        console.log("document.cookie.split(\";\") = " + document.cookie.split(";"));

        // 쿠키가 존재하는 경우에만 파싱하여 map에 저장
        if (document.cookie) {
            const cookieDecoded = decodeURIComponent(document.cookie);
            const cookieTokens = cookieDecoded.split(";");

            for (const c of cookieTokens) {
                const tmp = c.split("=");
                const key = tmp[0].trim();
                const value = JSON.parse(tmp[1]);

                this.map[key] = value;
            }
        }

        // product 속성이 없으면 빈 배열로 초기화
        if (!this.map["product"]) {
            this.map["product"] = [];
        }

    }

    get(name) {
        return this.map[name];
    }

    save() {
        const list = this.map["product"];
        const size = list.length;
        const lastIndex = size - 1;

        let str = "[";
        for (const m of list) {
            str += JSON.stringify(m);
            if (m !== list[lastIndex])
                str += ",";
        }
        str += "]";

        const encoded = encodeURIComponent(str);
        document.cookie = `product=${encoded}; path=/;`;
    }

    remove(name) {
        delete this.map[name];
    }

    addItem(name, item) {
        const list = this.map[name];
        list.push(item);
    }
}


window.addEventListener("load", function () {

    const formSection = document.querySelector("#reg-form");

    const name = formSection.querySelector('[name="name"]');
    const price = formSection.querySelector('[name="price"]');

    const weight = formSection.querySelector('[name="weight"]');
    const weightCategory = formSection.querySelector('.options .optionWeight.selected');
    // const selectedWeight = weightCategory.getAttribute('data-value');
    const selectedWeight = weightCategory ? weightCategory.getAttribute('data-value') : null;

    const quantity = formSection.querySelector('[name="quantity"]');
    const quantityCategory = formSection.querySelector('.options .optionQuantity.selected');
    // const selectedQuantity = quantityCategory.getAttribute('data-value');
    const selectedQuantity = quantityCategory ? quantityCategory.getAttribute('data-value') : null;

    const exp = formSection.querySelector('[name="exp"]');

    const storage = formSection.querySelector('.options .optionStorage.selected');
    // const selectedStorage = storage.getAttribute('data-value');
    const selectedStorage = storage ? storage.getAttribute('data-value') : null;

    const desc = formSection.querySelector('[name="desc"]');

    const state = formSection.querySelector('[name="state"]');
    const stateChecked = state.checked;

    const tempSave = formSection.querySelector('.temp-save');

    tempSave.onclick = function (e) {
        if (!e.target.classList.contains("temp-save"))
            return;

        console.log("tmp-save clicked!")

        let item = {
            name: name.value,
            price: price.value,
            weight: weight.value,
            selectedWeight: selectedWeight,
            quantity: quantity.value,
            selectedQuantity: selectedQuantity,
            exp: exp.value,
            selectedStorage: selectedStorage,
            desc: desc.value,
            stateChecked: stateChecked
        };

        console.log("item = ", item.name);
        for (let i in item)
            console.log("i = ", item[i])

        let cookie = new Cookie();
        console.log(cookie.get("product"));
        cookie.addItem("product", item);
        if (!cookie.get["product"] == null)
            cookie.remove("product");
        cookie.save();


    };


});


/*
function getImageFiles(e) {
    const uploadFiles = [];
    const files = e.currentTarget.files;
    const imagePreview = document.querySelector('.image-preview');
    const docFrag = new DocumentFragment();

    const uploadedImagesCount = imagePreview.querySelectorAll('li').length;

    if (uploadedImagesCount + files.length > 4) {
        alert('이미지는 최대 4개 까지 업로드가 가능합니다.');
        return;
    }


    // 파일 타입 검사
    [...files].forEach(file => {
        if (!file.type.match("image/.*")) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return
        }

        // 파일 갯수 검사
        if ([...files].length < 4) {
            uploadFiles.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = createElement(e, file);
                imagePreview.appendChild(preview);
            };
            reader.readAsDataURL(file);
        }
    });
}

function createElement(e, file) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    li.appendChild(img);

    const removeBtn = document.createElement('span');
    removeBtn.innerText = 'x';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => removeImage(li));
    li.appendChild(removeBtn);

    return li;
}

function removeImage(li) {
    li.parentNode.removeChild(li);
}

const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');

upload.addEventListener('click', () => realUpload.click());

realUpload.addEventListener('change', getImageFiles);

*/
