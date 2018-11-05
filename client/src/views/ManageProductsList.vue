<template>
  <div class="container">
    <section class="column is-10 is-offset-1">
      <!-- Title -->
      <nav class="level is-mobile">
        <div class="level-left">
          <h1 class="section-title">出品一覧</h1>
        </div>
        <div class="level-right">
          <button class="button m-button is-primary">
            <b-icon icon="plus"/>
            <span>新規出品登録</span>
          </button>
        </div>
      </nav>
      <!-- Tabs -->
      <section>
        <b-tabs type="is-boxed">
          <b-tab-item 
            label="出品中"/>
          <b-tab-item 
            label="非公開（在庫切れ）"/>
        </b-tabs>
      </section>
      <!-- Contorol -->
      <div class="level">
        <div class="level-left">
          <p class="level-item">並べ替え</p>
          <b-field class="level-item">
            <b-select placeholder="登録日が新しい順">
              <option value="new">登録日が新しい順</option>
              <option value="lower">登録日が古い順</option>
            </b-select>
          </b-field>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="field has-addons search-box">
              <div class="control">
                <input 
                  class="input" 
                  type="search"
                  placeholder="キーワードから探す">
              </div>
              <div class="control">
                <a class="button has-background-grey-lighter">
                  <span class="icon is-medium">
                    <img 
                      src="../assets/Search.svg" 
                      alt="検索"></span></a>
              </div>
            </div>
          </div>
        </div>         
      </div>
      <!-- table -->
      <b-table 
        :data="data" 
        :columns="columns"/>
      <!-- pagination -->
      <div class="page-box column is-6">
        <b-pagination 
          :total="total"
          :current.sync="current"
          :order="order"
          :size="size"
          :simple="isSimple"
          :rounded="isRounded"
          :per-page="perPage"/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          first_name: 'Jesse',
          last_name: 'Simmons',
          date: '2016-10-15 13:43:27',
          gender: 'Male'
        },
        {
          id: 2,
          first_name: 'John',
          last_name: 'Jacobs',
          date: '2016-12-15 06:00:53',
          gender: 'Male'
        },
        {
          id: 3,
          first_name: 'Tina',
          last_name: 'Gilbert',
          date: '2016-04-26 06:26:28',
          gender: 'Female'
        },
        {
          id: 4,
          first_name: 'Clarence',
          last_name: 'Flores',
          date: '2016-04-10 10:28:46',
          gender: 'Male'
        },
        {
          id: 5,
          first_name: 'Anne',
          last_name: 'Lee',
          date: '2016-12-06 14:38:38',
          gender: 'Female'
        }
      ],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'first_name',
          label: 'First Name'
        },
        {
          field: 'last_name',
          label: 'Last Name'
        },
        {
          field: 'date',
          label: 'Date',
          centered: true
        },
        {
          field: 'gender',
          label: 'Gender'
        }
      ],

      total: 200,
      current: 1,
      perPage: 20,
      order: 'is-centered',
      size: '',
      isSimple: false,
      isRounded: false
    };
  }
};
</script>

<style lang="scss">
.s-contents {
  width: 800px;
  margin: 8rem;
}
.page-box {
  margin: 3rem auto;
}
</style>
