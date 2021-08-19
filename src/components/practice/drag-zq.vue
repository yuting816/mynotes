<template>
	<div class="bg">
        <!-- calc是一个css函数会自动计算50%与moveX的和得到的px值 -->
		<div
			class="drag-item"
			@mousedown="allowDrag"
			@mousemove="dragging"
			@mouseup="banDrag"
            @mouseleave="banDrag"
			ref="dragItem"
			:style="`left:calc(50% + ${moveLeft}px);top:calc(50% + ${moveTop}px)`"
		>
		</div>
	</div>
</template>

<script>

	export default {
		components: {
		},
		data() {
			return {
                canDrag: false,
                //默认没移动，所以是0
				moveLeft: 0,
				moveTop: 0
			}
        },
        props:{

        },
		methods: {
			allowDrag() {
				this.canDrag = true;
			},
			dragging(event) {

				if (!this.canDrag) {
					return;
                }

                console.log(event,'event');

                //movementX和movementY是本次拖动的移动值
                this.moveLeft+=event.movementX;
                this.moveTop+=event.movementY;

			},
			banDrag() {
				this.canDrag = false;
			}
		}
	}
</script>

<style scoped>
	.bg {
		height: 100%;
		width: 100%;
		background-color: #f39861;
		position: relative;
	}
	.drag-item {
		height: 200px;
		width: 200px;
		/* border-radius: 50%; */
		background-color: #f5d259;
		position: absolute;
		transform: translate(-50%, -50%);
		/* // &:hover {
		// 	cursor: crosshair;
		// } */
	}
	.drag-item:hover {
		cursor: crosshair;
	}
</style>
