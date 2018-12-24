
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class EditIdeaaaaaaaaaaaaaaa 
	{
		public EditIdeaaaaaaaaaaaaaaa() 
		{
		}

		public int Id  { get; set; }
		public string Content  { get; set; }
		public DateTime PublicationDate  { get; set; }
		public DateTime EndDate  { get; set; }
		public int TargetGroupsIds  { get; set; }
		public int PictureId  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public EditIdeaaaaaaaaaaaaaaa ConvertFromModel(Idea idea,Group group,Picture picture)
		{
			Id = idea.Id;
			Content = idea.Content;
			PublicationDate = idea.PublicationDate;
			EndDate = idea.EndDate;
			TargetGroupsIds = group.Id;
			PictureId = picture.Id;

			return this;
		}

		public Idea GetIdeaFromViewModel()
		{
			var model = new Idea();
			model.Id =  Id;
			model.Content =  Content;
			model.PublicationDate =  PublicationDate;
			model.EndDate =  EndDate;

			return model;
		}
				public Group GetGroupFromViewModel()
		{
			var model = new Group();
			model.Id =  TargetGroupsIds;

			return model;
		}
				public Picture GetPictureFromViewModel()
		{
			var model = new Picture();
			model.Id =  PictureId;

			return model;
		}
			
	}
}