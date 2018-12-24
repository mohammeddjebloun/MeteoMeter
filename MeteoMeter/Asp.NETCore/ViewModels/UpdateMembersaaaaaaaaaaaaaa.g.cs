
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class UpdateMembersaaaaaaaaaaaaaa 
	{
		public UpdateMembersaaaaaaaaaaaaaa() 
		{
		}

		public int UserIds  { get; set; }
		public int GroupId  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public UpdateMembersaaaaaaaaaaaaaa ConvertFromModel(UserProfile userProfile,Group group)
		{
			UserIds = userProfile.Id;
			GroupId = group.Id;

			return this;
		}

		public UserProfile GetUserProfileFromViewModel()
		{
			var model = new UserProfile();
			model.Id =  UserIds;

			return model;
		}
				public Group GetGroupFromViewModel()
		{
			var model = new Group();
			model.Id =  GroupId;

			return model;
		}
			
	}
}