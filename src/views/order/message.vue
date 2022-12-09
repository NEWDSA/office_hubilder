<template>
    <TopNav>
		<template v-slot:topNavTitle>
			消息列表
		</template>
		
	</TopNav>

  <div class="message">
    <div class="ZJ-message-search">
			 <van-field
			    v-model="value1"
			    left-icon="search"
			    placeholder="搜索"
				center
			  />
	</div>
    <div class="con">
        <div class="msg-item" v-for="(item,index) in msgList" :key="index">
            <div class="item-top">
                <div class="msg-title">
                    <div class="icon" :style="item.status == 1 ? 'background:#FFBA6F' : 'background:#FF6F6F'"></div>
                   <div style="font-weight: 600;">{{ item.title }}</div> 
                </div>
                <div class="msg-time">{{ item.time }}</div>
            </div>
            <div class="item-con">
                <div class="msg-value">{{ item.value }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue';

    const msgList = ref([
        {
            title:'审核成功通知',
            value:' 您的资料已成功通过了审核，请耐心等待仿款 通知！',
            time:'05.03  13：06',
            status:'1'
        },
        {
            title:'审核失败通知',
            value:' 很抱歉，你提交的资料审核失败，请联系工作人 员，重新提交审核！',
            time:'05.03  13：06',
            status:'2'
        },
        {
            title:'请假通过通知',
            value:' 您的请假申请于2018年05月14日13时25分成功 通过审核！',
            time:'05.03  13：06',
            status:'1'
        }
    ])
</script>

<style lang="scss">
    .message{
        padding: 10px;

        .ZJ-message-search{
			margin-top: 5px;
			.van-cell{
				width: 100%;
				margin: 0 auto;
				height: 35px;
				input::-webkit-input-placeholder { /* WebKit browsers */ 
					color: #929495; 
				}
				border-radius: 10px;
				background:#C6E8E4;
				color: black;
			}
		}
       .con{
            margin-top: 10px;
            .msg-item{
                padding: 5px;

                .item-top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #e0e0e0;
                    padding: 20px 0;


                    .msg-title{
                        display: flex;
                        align-items: center;

                        .icon{
                            margin-right: 5px;
                            width: 1rem;
                            height: 1rem;
                            border-radius: 50%;
                        }
                    }

                    .msg-time{
                        font-size: .5rem;
                        color: #999999;
                    }
                }

                .item-con{
                    padding: 20px 0;

                    .msg-value{
                        text-indent:2em;    
                    }
                }
            }
       }






    }
</style>