<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-calendar" /> 表单
				</el-breadcrumb-item>
				<el-breadcrumb-item>基本表单</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="form-box">
				<el-form
					ref="form"
					:model="form"
					label-width="80px"
				>
					<el-form-item label="表单名称">
						<el-input v-model="form.name" />
					</el-form-item>
					<el-form-item label="选择器">
						<el-select
							v-model="form.region"
							placeholder="请选择"
						>
							<el-option
								key="bbk"
								label="步步高"
								value="bbk"
							/>
							<el-option
								key="xtc"
								label="小天才"
								value="xtc"
							/>
							<el-option
								key="imoo"
								label="imoo"
								value="imoo"
							/>
						</el-select>
					</el-form-item>
					<el-form-item label="日期时间">
						<el-col :span="11">
							<el-date-picker
								v-model="form.date1"
								type="date"
								placeholder="选择日期"
								style="width: 100%;"
							/>
						</el-col>
						<el-col
							class="line"
							:span="2"
						>
							-
						</el-col>
						<el-col :span="11">
							<el-time-picker
								v-model="form.date2"
								placeholder="选择时间"
								style="width: 100%;"
							/>
						</el-col>
					</el-form-item>
					<el-form-item label="城市级联">
						<el-cascader
							v-model="form.options"
							:options="options"
						/>
					</el-form-item>
					<el-form-item label="选择开关">
						<el-switch v-model="form.delivery" />
					</el-form-item>
					<el-form-item label="多选框">
						<el-checkbox-group v-model="form.type">
							<el-checkbox
								label="步步高"
								name="type"
							/>
							<el-checkbox
								label="小天才"
								name="type"
							/>
							<el-checkbox
								label="imoo"
								name="type"
							/>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="单选框">
						<el-radio-group v-model="form.resource">
							<el-radio label="步步高" />
							<el-radio label="小天才" />
							<el-radio label="imoo" />
						</el-radio-group>
					</el-form-item>
					<el-form-item label="文本框">
						<el-input
							v-model="form.desc"
							type="textarea"
							rows="5"
						/>
					</el-form-item>
					<el-form-item>
						<el-button
							type="primary"
							@click="onSubmit"
						>
							表单提交
						</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Baseform',
	title: '表单',
	data() {
		return {
			options: [
				{
					value: 'guangdong',
					label: '广东省',
					children: [
						{
							value: 'guangzhou',
							label: '广州市',
							children: [
								{
									value: 'tianhe',
									label: '天河区'
								},
								{
									value: 'haizhu',
									label: '海珠区'
								}
							]
						},
						{
							value: 'dongguan',
							label: '东莞市',
							children: [
								{
									value: 'changan',
									label: '长安镇'
								},
								{
									value: 'humen',
									label: '虎门镇'
								}
							]
						}
					]
				},
				{
					value: 'hunan',
					label: '湖南省',
					children: [
						{
							value: 'changsha',
							label: '长沙市',
							children: [
								{
									value: 'yuelu',
									label: '岳麓区'
								}
							]
						}
					]
				}
			],
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: true,
				type: ['步步高'],
				resource: '小天才',
				desc: '',
				options: []
			}
		};
	},
	methods: {
		onSubmit() {
			this.$message.success('提交成功！');
			
			this.$confirm('表单已提交，是否关闭当前标签？', '提示', {
				type: 'warning'
			}).then(() => {
				// 关闭当前页面的标签页（）
				this.$store.commit('system/closeCurrentTag', {
				    $router: this.$router,
				    $route: this.$route
				});
			}).catch(() => {});
		}
	}
};
</script>