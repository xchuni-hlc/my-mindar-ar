document.addEventListener("DOMContentLoaded", () => {
    const mindarContainer = document.querySelector("#mindar-container");

    // 建立 MindAR 項目
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: mindarContainer,
        imageTargetSrc: "targets.mind", // 影像追蹤檔案
        uiLoading: "yes",
    });

    const { renderer, scene, camera } = mindarThree;

    // 3D 物件組
    const anchor = mindarThree.addAnchor(0);

    // 建立 3D 物件 (範例：紅色方塊)
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);

    anchor.group.add(cube); // 把 3D 物件加到 anchor（當圖案被辨識時顯示）

    // 啟動 AR
    mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
});
